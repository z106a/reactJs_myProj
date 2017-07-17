import gql from 'graphql-tag';

export default gql`
mutation {
	UserProfile{
    UserProfileLogin(input:{credentials : { email: "gcc@inbox.ru", password: "123"}}){
      obj     
    }
  }
}
`;
