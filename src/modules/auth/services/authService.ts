export const authService = {
  login: async (username: string) => {
    return { token: "dummy_token", user: { username } };
  },
};
