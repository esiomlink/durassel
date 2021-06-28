import { Card } from "react-bootstrap";
import 'video-react/dist/video-react.css'; 
import { Player } from 'video-react';
import { useRef } from "react";
import useDraggable from "../../hooks/useDraggable";

export default function PostImg() {
  const videoRef = useRef(null);
  useDraggable(videoRef);
  return (
    <>
      <Card style={{ width: "20%", height: "auto" }} ref={videoRef}>
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
