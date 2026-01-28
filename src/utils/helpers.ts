export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

export function getSkillCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    frontend: "code-2",
    ui: "palette",
    tools: "wrench",
    concepts: "lightbulb",
  };
  return icons[category] || "circle";
}
