import React from 'react';

import { Posts } from 'components/Posts';
import { Centered } from 'components/Centered';
import { Container } from 'components/Container';
import { Button } from 'components/Button';

export default ({ data: { allMarkdownRemark: { edges: posts } } }) => {
  return (
    <Container>
      <h1>Blog</h1>
      <Posts posts={posts} />
    </Container>
  );
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          ...MarkdownMetadataFragment
          ...MarkdownFrontmatterFragment
        }
      }
    }
  }
`;
