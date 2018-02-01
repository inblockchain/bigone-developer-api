/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href="/docs/get_started.html">
              Getting Started
            </a>
            <a href="/docs/sdk_overview.html">
              Guides
            </a>
            <a href="/docs/api.html">
              API Reference
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://t.me/exBigONE">
              Telegram
            </a>
            <a href="https://twitter.com/BigONEexchange">
              Twitter
            </a>
            <a href="https://facebook.com/exBigONE">Facebook</a>
            <a href="https://beechat.io/join?g=656e6983bc5848e98323ebcb477da786&lang=en">
              Beechat
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
            <a href="https://big.one/">Exchange</a>
          </div>
        </section>

        <a
          href="https://api.big.one/"
          target="_blank"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/big.svg'}
            alt="BigONE Docs"
            width="60"
            height="45"
          />
        </a>
        <section className="copyright">
          Copyright &copy; {currentYear} BigONE
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
