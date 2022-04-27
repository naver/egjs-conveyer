/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import CodeBlock from "@theme/CodeBlock";
import MainLogo from "../components/main/MainLogo";
import styles from "./styles.module.css";
import QuickStart from "../components/main/QuickStart";
import Frameworks from "../components/main/Frameworks";
import Features from "../components/main/Features";
import Layout from "@theme/Layout";

export default function Main() {
  return <Layout>
    <header className="my-4">
      <div className="hero" style={{ overflow: "hidden" }}>
        <MainLogo />
        <section className="py-4">
          <CodeBlock className={clsx(styles.max400, "language-shell")}>{"npm install @egjs/conveyer"}</CodeBlock>
          <div className="subtitle has-text-centered">Conveyer adds Drag gestures to your Native Scroll.</div>
        </section>
        <div className="block is-flex is-justify-content-center">
          <Link
            className="button mr-2"
            to={useBaseUrl("docs/")}>
            🚀 Get Started
          </Link>
          <Link
            className="button pl-5"
            style={{ borderRadius: "4px 0 0 4px" }}
            to="https://github.com/naver/egjs-conveyer">
            <span className="icon is-small mr-2">
              <img src="img/icons/github.svg" />
            </span>
            <span>GitHub</span>
          </Link>
          <Link
            className="button"
            style={{ borderRadius: "0 4px 4px 0", borderLeft: "0" }}
            to="https://github.com/naver/egjs-conveyer/stargazers">
            <img src="img/icons/star.svg" />
            <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/naver/egjs-conveyer?color=%23ffffff&label=%20&style=for-the-badge" />
          </Link>
        </div>
      </div>
    </header>
    <article className="container mb-6">
      <section className="block mb-6">
        <p className="title">Framework Ready</p>
        <p className="subtitle">Use Conveyer in your favorite framework!</p>
        <Frameworks />
      </section>
      <section className="block mb-6">
        <p className="title">Features</p>
        <p className="subtitle">It is simple and provides complete functionality.</p>
        <Features />
      </section>
      <section className="block py-4">
        <QuickStart />
      </section>
    </article>
    {/* <article className="container mb-6">
    <div className="block mb-6">
      <p className="title"><GridIcon className="main-icon" />Grid Types</p>
      <p className="subtitle">Use various types of Conveyer!</p>
      <Grids />
    </div>
    <div className="block mb-6">
      <p className="title"><FavoriteIcon className="main-icon" /> Framework Ready</p>
      <p className="subtitle">Use Conveyer in your favorite framework!</p>
      <Frameworks />
    </div>
    <div className="block my-6">
      <p className="title"><StarIcon className="main-icon" /> Features</p>
      <Features />
    </div>
  </article> */}
  </Layout>;
}
