export {};

declare global {
  namespace NodeJS {
    interface Global {
      globalVariable: "abc";
    }
  }
  const globalVariable: "abc";
}
