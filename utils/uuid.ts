// generate uuid
export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0; // 生成 0-15 的随机数
    const v = c === "x" ? r : (r & 0x3) | 0x8; // 生成适当的值
    return v.toString(16); // 转换为十六进制
  });
}
