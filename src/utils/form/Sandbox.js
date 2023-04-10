import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Button, Col, Grid, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { FileUploadControl } from ".";
import BaseReactComponent from "./BaseReactComponent";
import CheckboxControl from "./CheckboxControl";
import CustomTextControl from "./CustomTextControl";
import Form from "./Form";
import FormElement from "./FormElement";
import FormValidator from "./FormValidator";
import RadioGroupControl from "./RadioGroupControl";
import SelectControl from "./SelectControl";

class Sandbox extends BaseReactComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            about: "",
            age: "",
            decimal: "",
            email: "",
            password: "",
            inProgress: false,
            searchableSingleRegion: '',
            searchableMultipleRegion: "",
            regionOptions: [
                { value: 1, label: "Goa" },
                { value: 2, label: "Maha" },
                { value: 3, label: "Delhi" },
                { value: 4, label: "Goa highway" }
            ],
            Venue: "",
            isStarred: false,

            products: [
                {
                    id: 1,
                    name: "Light",
                    price: 30
                },
                {
                    id: 2,
                    name: "Lager",
                    price: 50
                },
                {
                    id: 3,
                    name: "Stout",
                    price: 100
                }
            ],
            value: "",

            attachment: {
                name: "filename.jpg",
                url: "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg"
            },
            attachments: []
        };
    }

    setValue = (value) => {
        this.setState({ value }, () => {
            ReactDOM.findDOMNode(this.form).dispatchEvent(new Event("submit"));
        });
    };

    onValidSubmit = (done, event) => {
        console.log("Value submitted" + this.state.value);
        console.log("Form Submitted" + this.state.name);
    };

    componentDidMount() {

    }

    render() {

        const regionOptions = [...this.state.regionOptions];

        return (
            <Fragment>
                <Form onValidSubmit={this.onValidSubmit} ref={el => this.form = el}>
                    <Grid>
                        <Row className="show-grid">
                            <Col md={6}>

                                <FormElement
                                    valueLink={this.linkState(this, "attachment")}
                                    label="Upload Image"
                                    required
                                    validations={[
                                        {
                                            validate: FormValidator.isRequired,
                                            message: "File is required"
                                        }
                                    ]}
                                    control={{
                                        type: FileUploadControl,
                                        settings: {
                                            moduleName: "account",
                                            subModule: "project",
                                            fileType: "IMAGE",
                                            extensions: ["image/*"],
                                            maxFiles: 1,
                                            maxFileSize: 100000000,
                                            onSelect: (file, callback) => {
                                                // You will need to generate signedURL by calling API and then call callback
                                                const fileInfo = {
                                                    id: file.lastModified,
                                                    name: file.name,
                                                    size: file.size,
                                                    mimeType: file.type,
                                                    path: "single.jpg"
                                                };
                                                callback(fileInfo, "http://35.154.155.206/api");
                                            }
                                        }
                                    }}
                                />
                            </Col>
                            <Col md={6}>
                                <FormElement
                                    valueLink={this.linkState(this, "attachments")}
                                    label="Upload Image Multiple"
                                    required
                                    validations={[
                                        {
                                            validate: FormValidator.isRequired,
                                            message: "File is required"
                                        }
                                    ]}
                                    control={{
                                        type: FileUploadControl,
                                        settings: {
                                            moduleName: "account",
                                            subModule: "project",
                                            fileType: "IMAGE",
                                            extensions: [".png,.jpg"],
                                            maxFiles: 2,
                                            maxFileSize: 100000000,
                                            onSelect: (file, callback) => {
                                                // You will need to generate signedURL by calling API and then call callback
                                                const fileInfo = {
                                                    id: file.lastModified,
                                                    name: file.name,
                                                    size: file.size,
                                                    mimeType: file.type,
                                                    path: "multi" + (this.state.attachments.length + 1) + ".jpg"
                                                };
                                                callback(fileInfo, "http://35.154.155.206/api");
                                            }
                                        }
                                    }}
                                />
                            </Col>

                            <Col md={6}>
                                <FormElement
                                    valueLink={this.linkState(this, "name")}
                                    label="Name"
                                    required
                                    helpText="This is helptext"
                                    hint={{
                                        title: "Title Custom",
                                        description: <span> Custom Hint Bro! </span>,
                                        placement: "bottom"
                                    }}
                                    validations={[
                                        {
                                            validate: FormValidator.isRequired,
                                            message: "Field cannot be empty"
                                        }
                                    ]}
                                    control={{
                                        type: CustomTextControl,
                                        settings: {
                                            placeholder: "Name is required",
                                            prefix: "Mr/Ms",
                                            suffix: "is here!"
                                        }
                                    }}
                                />
                            </Col>
                            <Col md={6}>
                                <FormElement
                                    label="Age"
                                    required
                                    helpText="This is helptext"
                                    hint={{
                                        title: "Title Custom",
                                        description: <span> Custom Hint Bro! </span>,
                                        placement: "left"
                                    }}
                                    validations={[
                                        {
                                            validate: FormValidator.isRequired,
                                            message: "Age is required"
                                        },
                                        {
                                            validate: FormValidator.isPositiveInt,
                                            message: "Age should be a positive number"
                                        },
                                        {
                                            validate: FormValidator.isWithinInt(0, 110),
                                            message: "Age should be less than 110 years"
                                        }
                                    ]}
                                    control={{
                                        type: CustomTextControl,
                                        settings: {
                                            maxLength: 3
                                        }
                                    }}
                                    valueLink={this.linkState(this, "age")}
                                />
                            </Col>
                            <Col md={6}>
                                <FormElement
                                    valueLink={this.linkState(this, "decimal")}
                                    label="Decimal"
                                    required
                                    helpText="This is helptext"
                                    hint={{
                                        title: "Title Custom",
                                        description: <span> Custom Hint Bro! </span>
                                    }}
                                    validations={[
                                        {
                                            validate: FormValidator.isRequired,
                                            message: "Decimal is required"
                                        }
                                    ]}
                                    control={{
                                        type: CustomTextControl,
                                        settings: {}
                                    }}
                                />
                            </Col>
                            <Col md={6}>
                                <FormElement
                                    valueLink={this.linkState(this, "email")}
                                    label="Email"
                                    required
                                    helpText="This is helptext"
                                    hint={{
                                        title: "Title Custom",
                                        description: <span> Custom Hint Bro! </span>,
                                        placement: "left"
                                    }}
                                    validations={[
                                        {
                                            validate: FormValidator.isRequired,
                                            message: "Email is required"
                                        },
                                        {
                                            validate: FormValidator.isEmail,
                                            message: "Invalid Email"
                                        }
                                    ]}
                                    control={{
                                        type: CustomTextControl,
                                        settings: {}
                                    }}
                                />
                            </Col>
                            <Col md={6}>
                                <FormElement
                                    valueLink={this.linkState(this, "password")}
                                    label="Password"
                                    required
                                    helpText="This is helptext"
                                    hint={{
                                        title: "Title Custom",
                                        description: <span> Custom Hint Bro! </span>
                                    }}
                                    validations={[
                                        {
                                            validate: FormValidator.isRequired,
                                            message: "Password is required"
                                        },
                                        {
                                            validate: FormValidator.isPassword(
                                                true, // requireSmallLetter (defaults to true),
                                                true, // requireCapitalLetter (defaults to true),
                                                true, // requireNumber (defaults to true),
                                                false // requireSpecialCharacter (defaults to true)
                                            ),
                                            message:
                                                "Password should have have a small letter, capital letter and a number"
                                        }
                                    ]}
                                    control={{
                                        type: CustomTextControl,
                                        settings: {
                                            type: "password"
                                        }
                                    }}
                                />
                            </Col>
                            <Col sm={6}>
                                <FormElement
                                    valueLink={this.linkState(this, "about")}
                                    label="About"
                                    required
                                    helpText="This is helptext"
                                    hint={{
                                        title: "Title Custom",
                                        description: <span> Custom Hint Bro! </span>,
                                        placement: "left"
                                    }}
                                    validations={[
                                        {
                                            validate: FormValidator.isRequired,
                                            message: "About is required"
                                        }
                                    ]}
                                    control={{
                                        type: CustomTextControl,
                                        settings: {
                                            multiline: true,
                                            placeholder: "Please write about yourself"
                                        }
                                    }}
                                />
                            </Col>
                            <Col sm={6}>
                                <FormElement
                                    valueLink={this.linkState(this, "searchableSingleRegion")}
                                    label="Market"
                                    required
                                    helpText=""
                                    hint={{
                                        title: "Title Custom",
                                        description: <span> Custom Hint Bro! </span>
                                    }}
                                    validations={[
                                        {
                                            validate: FormValidator.isRequired,
                                            message: "Field cannot be empty"
                                        }
                                    ]}
                                    control={{
                                        type: SelectControl,
                                        settings: {
                                            options: regionOptions,
                                            multiple: false,
                                            searchable: true,
                                            onChangeCallback: (onBlur) => {
                                                onBlur(this.state.searchableSingleRegion);
                                                console.log('Hello world!');
                                            }
                                        }
                                    }}
                                />
                            </Col>
                            <Col sm={6}>
                                <FormElement
                                    valueLink={this.linkState(this, "searchableMultipleRegion")}
                                    label="Multiple Market"
                                    required
                                    helpText=""
                                    hint={{
                                        title: "Title Custom",
                                        description: <span> Custom Hint Bro! </span>
                                    }}
                                    validations={[
                                        {
                                            validate: FormValidator.isRequired,
                                            message: "Field cannot be empty"
                                        }
                                    ]}
                                    control={{
                                        type: SelectControl,
                                        settings: {
                                            options: regionOptions,
                                            multiple: true,
                                            searchable: true,
                                            onChangeCallback: (onBlur) => {
                                                onBlur(this.state.searchableMultipleRegion);
                                                console.log('Hello world!');
                                            }
                                        }
                                    }}
                                />
                            </Col>
                            <Col sm={6}>
                                <FormElement
                                    valueLink={this.linkState(this, "Venue")}
                                    label="Outlet Details:"
                                    required
                                    validations={[
                                        {
                                            validate: FormValidator.isRequired,
                                            message: "Outlet details cannot be empty"
                                        }
                                    ]}
                                    control={{
                                        type: RadioGroupControl,
                                        settings: {
                                            columns: 1,
                                            options: [
                                                {
                                                    key: 1,
                                                    label: "On Premise Venue"
                                                },
                                                {
                                                    key: 2,
                                                    label: "Retail Venue"
                                                }
                                            ]
                                        }
                                    }}
                                />
                            </Col>
                            <Col sm={6}>
                                <FormElement
                                    valueLink={this.linkState(this, "isStarred")}
                                    label=""
                                    required
                                    helpText=""
                                    hint={{
                                        title: "Title Custom",
                                        description: <span> Custom Hint Bro! </span>
                                    }}
                                    validations={[
                                        {
                                            validate: FormValidator.isRequired,
                                            message: "Field cannot be empty"
                                        }
                                    ]}
                                    control={{
                                        type: CheckboxControl,
                                        settings: {
                                            onLabel: "Starred Unchecked",
                                            offLabel: "Starred Check", // optional if you want to show label
                                            onChangeCallback: () => {
                                                console.log('Callback executed');
                                            }
                                        }
                                    }}
                                />
                            </Col>
                            <Col sm={12}>
                                {/*
                                <FormSubmitButton name="now" customClass="" formError={this.state.inProgress}
                                              progressMessage="Validating.." fullWidth>
                                    Submit
                                </FormSubmitButton>
                                <FormSubmitButton name="later" customClass="" formError={this.state.inProgress}
                                              progressMessage="Validating.." fullWidth>
                                    Submit New
                                </FormSubmitButton>
                                */}
                            </Col>
                        </Row>
                    </Grid>
                </Form>
                <Button onClick={() => { this.setValue("now") }}>Now</Button>
                <Button onClick={() => { this.setValue("later") }}>Later</Button>

            </Fragment>

        );
    }
}

Sandbox.propTypes = {
    classes: PropTypes.object
};

export default Sandbox;
