-- CreateTable
CREATE TABLE "Todo" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
