# React TODO アプリケーション

![React](https://img.shields.io/badge/React-19.1.0-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?logo=vite)

シンプルで使いやすい TODO 管理アプリケーションです。React + TypeScript + Vite で構築されており、モダンな開発環境を提供します。

## ✨ 主な機能

- 📝 **TODO の追加**: テキスト入力で簡単に TODO を追加
- ✅ **TODO の完了**: 未完了 TODO を完了状態に移動
- 🗑️ **TODO の削除**: 不要な TODO を削除
- ↩️ **TODO の復元**: 完了 TODO を未完了状態に戻す
- 🚫 **制限機能**: 未完了 TODO は最大 5 個まで（効率的なタスク管理）

## 🚀 クイックスタート

### 前提条件

- Node.js 18 以上
- npm または yarn

### インストール・実行

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてアプリケーションを確認できます。

### その他のコマンド

```bash
# プロダクションビルド
npm run build

# リント実行
npm run lint

# プレビュー
npm run preview
```

## 🎯 使い方

1. **TODO を追加**: 入力欄に TODO 内容を入力し、「追加」ボタンをクリック
2. **TODO を完了**: 未完了リストの「完了」ボタンをクリック
3. **TODO を削除**: 未完了リストの「削除」ボタンをクリック
4. **TODO を戻す**: 完了リストの「戻す」ボタンをクリック

> **💡 ヒント**: 未完了 TODO が 5 個に達すると、新しい TODO の追加ができなくなります。完了または削除して数を減らしてください。

## 🏗️ プロジェクト構造

```
src/
├── components/           # 再利用可能なコンポーネント
│   ├── InputTodo.tsx     # TODO 入力コンポーネント
│   ├── IncompleteTodos.tsx # 未完了 TODO 表示
│   └── CompleteTodos.tsx # 完了 TODO 表示
├── Todo.tsx             # メイン TODO コンポーネント
├── style.css            # スタイルシート
└── main.tsx             # アプリケーションエントリーポイント
```

## 🛠️ 技術スタック

- **React 19.1.0**: ユーザーインターフェース構築
- **TypeScript 5.8.3**: 型安全な開発
- **Vite 6.3.5**: 高速な開発環境とビルドツール
- **ESLint**: コード品質管理

## 📚 詳細ドキュメント

プロジェクトの詳細な設計や実装については、[DOCUMENTATION.md](./DOCUMENTATION.md) をご参照ください。

## 🤝 開発に参加する

### 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone <repository-url>
cd react-sample

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### コーディング規約

- TypeScript の型チェックを活用
- ESLint ルールに従う
- props には適切な型定義を行う
- 状態管理は immutable パターンを使用

## 📝 改善予定

- [ ] TODO のユニーク ID 導入
- [ ] ローカルストレージでの永続化
- [ ] TODO 編集機能
- [ ] ドラッグ & ドロップによる順序変更
- [ ] カテゴリー機能

## 📄 ライセンス

このプロジェクトは個人学習用です。

---

**作成日**: 2024 年  
**最終更新**: プロジェクト初期作成時
