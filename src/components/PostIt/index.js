import { Card } from "react-bootstrap";

export default function PostIt() {
  return (
    <>
            <Card
              style={{ width: "20%", height: "auto" }}
              className="bg-warning"
            >
              <Card.Header as="h5" className='text-dark'>Post-it</Card.Header>
              <Card.Body>
                <Card.Text className='text-dark'>
                  This an example of the text i want to put in my post it.
                </Card.Text>
              </Card.Body>
            </Card>
    </>
  );
}
