"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface MenuBarProps {
  onNavigate: (sectionId: string) => void;
  onSave?: () => void;
  onNew?: () => void;
}

interface MenuItem {
  label: string;
  shortcut?: string;
  separator?: boolean;
  action?: () => void;
}

interface Menu {
  label: string;
  items: MenuItem[];
}

export function MenuBar({
  onNavigate,
  onNew,
}: MenuBarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleNew = useCallback(() => {
    sessionStorage.setItem("show-new-toast", "true");

    if (onNew) {
      onNew();
    }

    window.location.reload();
  }, [onNew]);

  const menus: Menu[] = [
    {
      label: "File",
      items: [
        {
          label: "New",
          shortcut: "Ctrl+N",
          action: handleNew,
        },
      ],
    },

    {
      label: "View",
      items: [
        {
          label: "Home",
          action: () => onNavigate("hero"),
        },
        {
          label: "About",
          action: () => onNavigate("about"),
        },
        {
          label: "Skills",
          action: () => onNavigate("skills"),
        },
        {
          label: "Projects & Experience",
          action: () => onNavigate("experience"),
        },
        {
          label: "Contact",
          action: () => onNavigate("contact"),
        },
      ],
    },

    {
      label: "Help",
      items: [
        {
          label: "I’m Here",
          action: () => onNavigate("contact"),
        },
      ],
    },
  ];

  /* Click outside */
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node)
    ) {
      setOpenMenu(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [handleClickOutside]);

  /* Escape key */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* Ctrl + N */
  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "n"
      ) {
        e.preventDefault();
        handleNew();
      }
    };

    document.addEventListener(
      "keydown",
      handleShortcut
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleShortcut
      );
    };
  }, [handleNew]);

  /* Keyboard navigation */
  const handleMenuKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    menu: Menu
  ) => {
    if (
      e.key === "Enter" ||
      e.key === " "
    ) {
      e.preventDefault();

      setOpenMenu(
        openMenu === menu.label
          ? null
          : menu.label
      );
    }

    if (e.key === "Escape") {
      setOpenMenu(null);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpenMenu(menu.label);
    }
  };

  return (
    <nav
      ref={menuRef}
      className="paint-menu-bar"
      role="menubar"
      aria-label="Portfolio menu"
    >
      {menus.map((menu) => {
        const isOpen = openMenu === menu.label;

        return (
          <div
            key={menu.label}
            className="relative"
          >
            {/* Menu button */}
            <button
              type="button"
              className={`paint-menu-item ${
                isOpen
                  ? "paint-menu-item-active"
                  : ""
              }`}
              onClick={() =>
                setOpenMenu(
                  isOpen
                    ? null
                    : menu.label
                )
              }
              onMouseEnter={() => {
                if (openMenu) {
                  setOpenMenu(menu.label);
                }
              }}
              onKeyDown={(e) =>
                handleMenuKeyDown(
                  e,
                  menu
                )
              }
              role="menuitem"
              aria-haspopup="true"
              aria-expanded={isOpen}
              id={`menu-${menu.label.toLowerCase()}`}
            >
              {menu.label}
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div
                className="paint-dropdown"
                role="menu"
                aria-labelledby={`menu-${menu.label.toLowerCase()}`}
              >
                {menu.items.map(
                  (item, index) => {
                    /* Separator */
                    if (item.separator) {
                      return (
                        <div
                          key={`separator-${index}`}
                          className="paint-dropdown-separator"
                          role="separator"
                        />
                      );
                    }

                    return (
                      <button
                        key={`${item.label}-${index}`}
                        type="button"
                        className="
                          paint-dropdown-item
                          w-full
                          text-left
                          flex
                          justify-between
                          items-center
                        "
                        onClick={() => {
                          item.action?.();
                          setOpenMenu(null);
                        }}
                        role="menuitem"
                      >
                        <span>
                          {item.label}
                        </span>

                        {item.shortcut && (
                          <span className="paint-shortcut">
                            {item.shortcut}
                          </span>
                        )}
                      </button>
                    );
                  }
                )}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}