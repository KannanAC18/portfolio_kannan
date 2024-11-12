
//ThemeContext
export type Theme = "dark" | "light";
export interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

//Social icons
export interface SocialIconsProps {
    title: "EMAIL" | "PHONE" | "BIRTHDAY" | "LOCATION" | "LINKEDIN";
    icon: React.ElementType; // Use React.ElementType for the icon
    data: string;
  }

  // NavBar.tsx
  export type NavBarSection = "ABOUTME" | "RESUME" | "PORTFOLIO" | "CERTIFICATIONS" | "CONTACT";

  export interface NavBarProps {
    section: "ABOUTME" | "RESUME" | "PORTFOLIO" | "CERTIFICATIONS" | "CONTACT";
  }
  