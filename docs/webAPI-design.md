#API 設計メモ

##対戦を開始

「対戦」を登録する

POST /api/games

##現在の盤面を見る

指定したターン数の「ターン」を取得する

GET /api/gemes/latest/turns/{turnCount}

レスポンスボディ

```json
{
  "turnCount": 1,
  "bord": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "nextDisc": 1,
  "winnerDisc": 1
}
```

##石を打つ

「ターン」を登録する

POST /api/games/latest/turns

リクエストボディ

```json
{
  "turnCount": 1,
  "move": {
    "disc": 1,
    "x": 0,
    "y": 0
  }
}
```

##勝敗を確認する

##自分の対戦結果を表示する

「対戦」の一覧を取得する

GET /api/games

レスポンスボディ

```json
{
  "games": [
    {
      "id": 1,
      "winnerDisc": 1,
      "startedAt": "YYY-MM-DD hh:mm:ss"
    }
  ]
}
```
