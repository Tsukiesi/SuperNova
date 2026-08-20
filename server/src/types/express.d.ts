declare global {
  namespace Express {
    interface Request {
      userId?: strring;
    }
  }
}

export {};
