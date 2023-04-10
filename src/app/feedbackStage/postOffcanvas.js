import React, { useEffect, useState } from "react";

import { Badge, Modal, Tab, Nav, NavItem, Image } from "react-bootstrap";
import ChatIcon from "../../assets/images/icons/chat-icon.svg";
import arrowUp from "../../assets/images/icons/arrowup-icon.svg";

const posts = [
  {
    id: "1",
    title: "Dark mode of the Korrect",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, facilis laborum sint porro nesciunt eveniet adipisci odit modi officia soluta?",
    badge: "planned",
    upvote: "21",
    chat: "32",
    matched: true,
  },
  {
    id: "2",
    title: "Dark mode of the Korrect",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, facilis laborum sint porro nesciunt eveniet adipisci odit modi officia soluta?",
    badge: "planned",
    upvote: "12",
    chat: "2",
    matched: true,
  },
  {
    id: "3",
    title: "Dark mode of the Korrect",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, facilis laborum sint porro nesciunt eveniet adipisci odit modi officia soluta?",
    badge: "planned",
    upvote: "2",
    chat: "2",
    matched: false,
  },
  //   {
  //     id: "4",
  //     title: "Dark mode of the Korrect",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, facilis laborum sint porro nesciunt eveniet adipisci odit modi officia soluta?",
  //     badge: "planned",
  //     upvote: "22",
  //     chat: "25",
  //     matched: false,
  //   },
  //   {
  //     id: "5",
  //     title: "Dark mode of the Korrect",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, facilis laborum sint porro nesciunt eveniet adipisci odit modi officia soluta?",
  //     badge: "planned",
  //     upvote: "12",
  //     chat: "23",
  //     matched: true,
  //   },
];

function PostCanvas({ show, handleClose }) {
  const [activeKey, setActiveKey] = useState("first");
  const [matchedPosts, setMatchedPosts] = useState(0);

  useEffect(() => {
    const totalMatched = posts.filter((post) => post.matched === true);
    setMatchedPosts(totalMatched.length);
  }, []);

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ borderBottom: "0" }}>
          <Modal.Title
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <Image
              src={arrowUp}
              alt="chat"
              style={{ transform: "rotate(-90deg)", cursor: "pointer" }}
              width={"30px"}
              height={"30px"}
              onClick={handleClose}
            />
            <p style={{ fontWeight: "bold" }}>Assign to the existing post </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Tab.Container activeKey={activeKey} onSelect={handleSelect}>
              <>
                <div>
                  <Nav bsStyle="tabs">
                    <NavItem
                      eventKey="first"
                      style={{ textTransform: "capitalize !important" }}
                    >
                      Matched post({matchedPosts})
                    </NavItem>
                    <NavItem
                      eventKey="second"
                      style={{ textTransform: "capitalize !important" }}
                    >
                      All Posts
                    </NavItem>
                  </Nav>
                </div>
                <div>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      {posts.map((post, i) => {
                        if (post.matched) {
                          return (
                            <div style={{}}>
                              <p style={{ fontWeight: "bold" }}>{post.title}</p>
                              <p>{post.content}</p>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginTop: "10px",
                                }}
                              >
                                <Badge
                                  style={{
                                    backgroundColor: "#bbdfef",
                                    color: "#3289a5",
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                    // padding: "5px 10px",
                                  }}
                                >
                                  {post.badge}
                                </Badge>
                                <div
                                  style={{
                                    display: "flex",
                                    gap: "20px",
                                    marginRight: "20px",
                                  }}
                                >
                                  <div>
                                    <Image src={arrowUp} alt="chat" />
                                    <span>{post.upvote}</span>
                                  </div>
                                  <div>
                                    <Image src={ChatIcon} alt="chat" />
                                    <span>{post.chat}</span>
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  borderBottom: "1px solid #a7a3a3",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              />
                            </div>
                          );
                        }
                      })}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {posts.map((post, i) => (
                        <div style={{}}>
                          <p style={{ fontWeight: "bold" }}>{post.title}</p>
                          <p>{post.content}</p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginTop: "10px",
                            }}
                          >
                            <Badge
                              style={{
                                backgroundColor: "#bbdfef",
                                color: "#3289a5",
                              }}
                            >
                              {post.badge}
                            </Badge>
                            <div
                              style={{
                                display: "flex",
                                gap: "20px",
                                marginRight: "20px",
                              }}
                            >
                              <div>
                                <Image src={arrowUp} alt="chat" />
                                <span>{post.upvote}</span>
                              </div>
                              <div>
                                <Image src={ChatIcon} alt="chat" />
                                <span>{post.chat}</span>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              borderBottom: "1px solid #a7a3a3",
                              marginBottom: "20px",
                              marginTop: "20px",
                            }}
                          />
                        </div>
                      ))}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2>Third Tab Content</h2>
                      <p>
                        Proin ac sapien leo. Sed auctor sodales ex vitae mollis.
                        Maecenas vel felis eget sapien lobortis luctus. Integer
                        semper purus quis enim feugiat, vitae dapibus mauris
                        vestibulum.{" "}
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </>
            </Tab.Container>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PostCanvas;
