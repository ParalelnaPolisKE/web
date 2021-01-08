import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export const CryptoNodes = () => (
  <ul className="list-reset">
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              nodes {
                BTC {
                  ispolUrl
                  mainnet {
                    url
                    port
                  }
                }
                LTC {
                  ispolUrl
                  mainnet {
                    url
                    port
                  }
                }
                XMR {
                  ispolUrl
                  mainnet {
                    url
                    port
                  }
                }
              }
            }
          }
        }
      `}
    >
      {({
        site: {
          siteMetadata: { nodes },
        },
      }) =>
        Object.entries(nodes).map(([key, node], i) => (
          <li key={`${key}-node-${i}`} style={{ wordBreak: 'break-all' }}>
            <strong>{key} node</strong>: {node.mainnet.url}
            {node.mainnet.port && `:${node.mainnet.port}`}{' '}
            <a href={nodes[key].ispolUrl}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{
                  width: "16px",
                  height: "16px",
                }}
              >
                <path
                  fill-rule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        ))
      }
    </StaticQuery>
  </ul>
);