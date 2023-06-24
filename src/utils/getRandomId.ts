/**
 * randomId 생성 함수
 * @returns {string} randomId
 */
export function getRandomId(): string {
  return Math.random().toString(36).substring(2, 17);
}
