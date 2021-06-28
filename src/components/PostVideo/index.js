import { Card } from "react-bootstrap";
import 'video-react/dist/video-react.css'; 
import { Player } from 'video-react';

export default function PostImg() {
  return (
    <>
      <Card style={{ width: "20%", height: "auto" }}>
          <Player
            playsInline
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        <Card.Body>
          <Card.Text className="text-secondary">
            Some quick example.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
