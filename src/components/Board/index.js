import { Container } from "react-bootstrap";
import PostImg from "../PostImg";
import PostIt from "../PostIt";
import PostVideo from '../PostVideo';

export default function Board() {
  return (
    <Container fluid className='d-flex justify-content-around align-items-center'>
      <PostIt />
      <PostImg />
      <PostVideo />
    </Container>
  );
}
