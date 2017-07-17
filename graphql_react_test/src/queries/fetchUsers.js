import gql from 'graphql-tag';

export default gql`
 query{
	UserProfile{
    UserProfileFind{
      edges{
        node{
           pk
          id
          email
        }
      }
    }
  }
}
`;
