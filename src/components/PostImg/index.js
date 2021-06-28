import { Card } from "react-bootstrap";

export default function PostImg() {
  return (
    <>
      <Card style={{ width: "20%", height: "auto" }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjD2cpLq8vMuVFW8dnth18kLS0lwMX6jQZzA&usqp=CAU" />
        <Card.Body>
          <Card.Text className='text-dark'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
