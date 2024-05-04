let accessToken = window ? window.localStorage.getItem("token") : '';
let refreshToken = window ? window.localStorage.getItem("refreshToken") : '';


/**
 * Listen for changes from other tabs
 */
if (window) {

  window.addEventListener("storage", (event) => {
    if (event.key === "token") {
      accessToken = event.newValue;
    }
  });
}

export const getAccessToken = (): string | null => accessToken;

export const setAccessToken = (token: string): void => {
  if (window) {
    accessToken = token;

  }
  window.localStorage.setItem("token", token);
};
export const getRefreshToken = (): string | null => refreshToken;

export const setRefreshToken = (token: string): void => {
  if (window) {
    refreshToken = token;

  }
  window.localStorage.setItem("refreshToken", token);
};

export const removeAccessToken = (): void => {
  if (window) {
    accessToken = null;

  }
  window.localStorage.removeItem("token");
};

export const setLocalStorage = (name: string, value: string) => {
  if (window) {
    window.localStorage.setItem(name, value);

  }
};

export const getLocalStorage = (name: string): string | null => window.localStorage.getItem(name);

export const clearLocalStorage = () => {
  window.localStorage.clear();
};
