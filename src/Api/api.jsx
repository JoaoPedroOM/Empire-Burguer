export const API_URL = "https://api.brchallenges.com/api/empire-burger";

// https://api.brchallenges.com/api/empire-burger/menu - Menu
// https://api.brchallenges.com/api/empire-burger/testimonials - Feedback

export function MENU_GET() {
    return {
      url: `${API_URL}/menu`,
      options: {
        method: "GET",
        cache: 'no-store',
      },
    };
  }