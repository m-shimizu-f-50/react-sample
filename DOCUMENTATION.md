# React TODO アプリケーション ドキュメント

## 📋 プロジェクト概要

このプロジェクトは、React + TypeScript + Vite を使用して構築されたシンプルな TODO アプリケーションです。ユーザーは TODO の追加、完了、削除、元に戻すなどの基本的な操作を行うことができます。

## 🏗️ プロジェクト構造

```
react-sample/
├── public/
│   └── vite.svg              # Viteのロゴ
├── src/
│   ├── components/           # 再利用可能なコンポーネント
│   │   ├── InputTodo.tsx     # TODO入力コンポーネント
│   │   ├── IncompleteTodos.tsx # 未完了TODO表示コンポーネント
│   │   └── CompleteTodos.tsx # 完了TODO表示コンポーネント
│   ├── App.tsx              # 使用されていないメインアプリコンポーネント
│   ├── App.css              # 使用されていないスタイル
│   ├── Todo.tsx             # メインTODOコンポーネント（実際のエントリーポイント）
│   ├── style.css            # メインスタイルシート
│   ├── main.tsx             # アプリケーションのエントリーポイント
│   └── vite-env.d.ts        # Vite環境の型定義
├── package.json             # プロジェクト依存関係とスクリプト
├── tsconfig.json            # TypeScript設定
├── vite.config.ts           # Vite設定
└── eslint.config.js         # ESLint設定
```

## 🚀 技術スタック

- **フレームワーク**: React 19.1.0
- **言語**: TypeScript 5.8.3
- **ビルドツール**: Vite 6.3.5
- **リンター**: ESLint 9.25.0
- **スタイリング**: CSS（プレーン CSS）

## 🔧 セットアップ・実行

### 開発環境での実行

```bash
npm run dev
```

### ビルド

```bash
npm run build
```

### リント

```bash
npm run lint
```

### プレビュー

```bash
npm run preview
```

## 📱 機能概要

### 主要機能

1. **TODO 追加**: テキスト入力で TODO を追加
2. **TODO 完了**: 未完了 TODO を完了状態に移動
3. **TODO 削除**: 未完了 TODO を削除
4. **TODO 復元**: 完了 TODO を未完了状態に戻す
5. **制限機能**: 未完了 TODO は最大 5 個まで

### 制約

- 未完了 TODO の上限: 5 個
- 空文字の TODO 追加は不可

## 🧩 コンポーネント詳細

### Todo.tsx（メインコンポーネント）

```typescript
// 主な状態管理
const [todoText, setTodoText] = useState(''); // 入力テキスト
const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]); // 未完了TODO配列
const [completeTodos, setCompleteTodos] = useState<string[]>([]); // 完了TODO配列
```

**主要な関数**:

- `onChangeTodoText`: 入力欄の値を更新
- `onClickAdd`: TODO を追加（制限チェック付き）
- `onClickDelete`: TODO を削除
- `onClickComplete`: TODO を完了状態に移動
- `onClickBack`: TODO を未完了状態に戻す

### InputTodo.tsx（入力コンポーネント）

```typescript
type InputTodoProps = {
	todoText: string; // 現在の入力値
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // 入力変更ハンドラー
	onClick: () => void; // 追加ボタンクリックハンドラー
	disabled: boolean; // 無効化フラグ
};
```

**役割**: TODO 入力とその制御を担当

### IncompleteTodos.tsx（未完了 TODO 表示）

```typescript
type IncompleteTodosProps = {
	incompleteTodos: string[]; // 未完了TODO配列
	onClickComplete: (index: number) => void; // 完了ボタンクリックハンドラー
	onClickDelete: (index: number) => void; // 削除ボタンクリックハンドラー
};
```

**役割**: 未完了 TODO のリスト表示と操作ボタンの提供

### CompleteTodos.tsx（完了 TODO 表示）

```typescript
type CompleteTodoProps = {
	completeTodos: string[]; // 完了TODO配列
	onClickBack: (index: number) => void; // 戻すボタンクリックハンドラー
};
```

**役割**: 完了 TODO のリスト表示と戻す操作の提供

## 🎨 スタイル設計

### デザインコンセプト

- **色調**: 緑・青系の落ち着いたカラーパレット
- **レイアウト**: 固定幅（400px）のボックスレイアウト
- **ユーザビリティ**: ホバーエフェクトと視覚的なフィードバック

### 主要 CSS クラス

- `.input-area`: TODO 入力エリア（緑系背景）
- `.incomplete-area`: 未完了 TODO エリア（境界線付き）
- `.complete-area`: 完了 TODO エリア（グレー系背景）
- `.list-row`: TODO 項目の横並びレイアウト

## 🔄 データフロー

```
1. ユーザーがTODOを入力 → todoText状態更新
2. 追加ボタンクリック → incompleteTodos配列に追加
3. 完了ボタンクリック → incompleteTodos → completeTodos に移動
4. 削除ボタンクリック → incompleteTodos配列から削除
5. 戻すボタンクリック → completeTodos → incompleteTodos に移動
```

## 🐛 デバッグ・保守のポイント

### 状態管理の確認

- React DevTools で状態の変化を追跡
- 配列操作は常に新しい配列を作成（immutable パターン）

### 型安全性

- TypeScript の型チェックを活用
- props の型定義は必須

### パフォーマンス

- `key`プロップには TODO テキストを使用（注意：重複時の問題）
- 配列操作での`splice`使用に注意

## 📝 改善提案

### 短期的改善

1. TODO のユニーク ID 導入（key プロップの改善）
2. ローカルストレージでの永続化
3. TODO 編集機能の追加

### 長期的改善

1. 状態管理ライブラリ（Zustand, Redux）の導入
2. テストの追加（Jest, React Testing Library）
3. モバイル対応のレスポンシブデザイン
4. アクセシビリティの向上

## 🔍 トラブルシューティング

### よくある問題

1. **TODO 追加できない**: 5 個制限または空文字チェック
2. **スタイルが反映されない**: style.css の import 確認
3. **型エラー**: TypeScript 設定と props の型定義確認

---

**作成日**: 2024 年
**最終更新**: プロジェクト初期作成時
