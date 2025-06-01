import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Meguru
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            次世代のユーザー管理システムへようこそ。
            シンプルで安全なアカウント管理を提供します。
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/register"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
            >
              新規ユーザー登録
            </Link>
            
            <Link
              href="#"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-indigo-600 font-bold py-3 px-8 rounded-lg border-2 border-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 inline-block"
            >
              ログイン
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">セキュリティ</h3>
            <p className="text-gray-600">最新の暗号化技術を使用して、あなたの情報を安全に保護します。</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">高速</h3>
            <p className="text-gray-600">最適化されたアーキテクチャにより、高速なレスポンスを実現。</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">モダンUI</h3>
            <p className="text-gray-600">直感的で美しいユーザーインターフェースを提供します。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
