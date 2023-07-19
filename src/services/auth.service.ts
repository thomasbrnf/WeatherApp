export function getToken() {
  const tokenCookie = document.cookie.match(/(?:^|;)\s*token\s*=\s*([^;]+)/);
  return tokenCookie ? tokenCookie.pop() : null;
}
