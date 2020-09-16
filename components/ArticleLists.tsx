import Link from 'next/link';

import { Box, Text, Flex, Heading, Link as StyledLink, Tag, useColorMode } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { colorModeObj } from 'styles/colorModes';

const Article = styled(Box)`
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  /* box-sizing: border-box; */
  padding: 0.8rem 1rem;
  margin: 0 -1rem;
  width: 100%;

  @media screen and (min-width: 1100px) {
    /* width: 1080px; */
    &:hover {
      background-color: #f6f8fb;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    border-bottom: 1px solid #d6d9de;
    border-radius: 0;
    justify-content: center;
  }
`;

const ArticleTitle = styled(Box)`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

type Props = {
  // eslint-disable-next-line no-undef
  isPopular?: IsPopular;
  // eslint-disable-next-line no-undef
  blogs: Blog[];
};

const ArticleLists = ({ isPopular, blogs }: Props) => {
  const { colorMode } = useColorMode();
  const backgroundColor = ['#fff3bf', '#d3f9d8', 'rgba(0,0,0,.1)', '#fff0f6', '#f3f0ff', '#e3fafc'];

  return (
    <Flex flexDirection="column" m="3rem 0">
      <Flex
        w="100%"
        borderBottom={['none', 'none', '1px solid #d6d9de', '1px solid #d6d9de']}
        alignItems="center"
        paddingBottom=".5rem"
      >
        <Heading
          fontSize={['1.7rem', '1.7rem', '2rem', '2rem']}
          color={colorModeObj.titleColor[colorMode]}
        >
          {isPopular ? 'Popular Articles' : 'Latest Articles'}
        </Heading>
        <Link href="www.google.com">
          <StyledLink
            ml="3rem"
            mt=".5rem"
            fontWeight="500"
            padding=".3rem .5rem"
            backgroundColor="#f6f8fb"
            borderRadius="3rem"
            _hover={{ textDecoration: 'none', backgroundColor: '#868E96', color: 'white' }}
            fontSize={['.7rem', '.7rem', '.8rem', '.8rem']}
          >
            View All
          </StyledLink>
        </Link>
      </Flex>
      <Flex mt="1.5rem" alignItems="flex-start" justifyContent="center" flexDirection="column">
        {blogs.map((blog) => (
          <Article key={blog.id}>
            <Link href="www.google.com">
              <StyledLink _hover={{ textDecoration: 'none' }}>
                <ArticleTitle>
                  {!isPopular ? (
                    <Tag
                      fontSize={['.7rem', '.7rem', '.8rem', '.7 rem']}
                      p=".5rem"
                      borderRadius=".3rem"
                      m={[
                        'auto .4rem auto 0',
                        'auto .4rem auto 0',
                        'auto .4rem auto 0',
                        '1rem 1rem 10px 0',
                      ]} //for responsive
                      height="15px"
                      backgroundColor="#d3f9d8"
                      fontWeight="700"
                      width={['2.7rem', '2.7rem', '', '']}
                      minW=""
                    >
                      New!
                    </Tag>
                  ) : null}
                  <Text>
                    <span style={{ fontSize: '.8rem', color: '#787f87', fontWeight: 'revert' }}>
                      {blog.date}
                    </span>
                    <Heading fontSize={['1rem', '1.1rem', '1.15rem', '1.15rem']}>
                      {blog.title}
                    </Heading>
                  </Text>
                </ArticleTitle>
              </StyledLink>
            </Link>
            <Box
              d="flex"
              flexDirection={['column', 'row', 'row', 'row']}
              justifyContent={['flex-start', 'flex-start', 'flex-start', 'flex-end']}
              alignItems={['flex-start', 'center', 'center', 'center']}
              w="100%"
              flexWrap="wrap"
            >
              {blog.tags.map((tag, index) => (
                <Tag
                  key={index}
                  width="max-content"
                  height="20px"
                  p=".3rem .5rem"
                  fontSize=".8rem"
                  borderRadius="16px"
                  marginBottom="7px"
                  // marginLeft={['0', '0', '.5rem', '.5rem']}
                  marginRight=".5rem"
                  backgroundColor={`${
                    backgroundColor[Math.floor(Math.random() * backgroundColor.length)]
                  }`}
                  _hover={{ cursor: 'pointer' }}
                >
                  {tag}
                </Tag>
              ))}
            </Box>
          </Article>
        ))}
      </Flex>
    </Flex>
  );
};

export default ArticleLists;
