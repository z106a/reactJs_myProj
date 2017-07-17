import gql from 'graphql-tag';

export default gql`
 query getUser($id: JSON){
  UserProfile{
    UserProfileFindById(id: $id){
     firstName
     email
    }
  }
}
`;
