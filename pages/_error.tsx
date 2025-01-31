import { type ErrorProps } from "next/error";
import Link from "next/link";

const PageError = (
  {
    // statusCode = 0
  }: ErrorProps
): React.ReactElement => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-12">
      <h1 className="text-6xl font-bold text-purple-700 mb-4 float-animation">
        Boogie Back!
      </h1>

      <p className="text-xl text-purple-900 opacity-90 mb-8">
        4 everybody&#39;s sake, <br />
        <Link
          className="text-lg font-semibold text-purple-700 hover:text-pink-500 transition-colors"
          href="/"
          target="_top"
        >
          head back 2 paateee!!! 🎉
        </Link>
      </p>
    </div>

    <img
      alt="Head Back"
      className="rounded-lg shadow-xl hover:opacity-90 transition-opacity mb-8"
      src="https://sdk.bitmoji.com/render/panel/20037257-100025018093_7-s5-v1.png?transparent=1&palette=1&scale=1"
      style={{ height: "400px", width: "100%" }}
    />

    <div className="text-center mt-8">
      <p className="text-2xl font-bold text-purple-600 mb-4">
        We&#39;ll do our best to lure you back with some funky beats!
      </p>

      <Link
        className="bg-pink-500 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        href="/"
        target="_top"
      >
        Head Back 2 Paateee!!! 🎭
      </Link>
    </div>
  </div>
);

export default PageError;
