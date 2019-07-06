import React, { Component } from 'react';
import styled from 'styled-components';

const QuizFrame = styled.div`
    padding: 0% 25%;
`;

interface QuizState {
}
class Quiz extends Component<{}, QuizState> {
    /**
     * @ignore
     */
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    /**
     * @ignore
     */
    public render() {
        return (
            <div>
                <h1 className="title is-1">Welcome to the Quiz</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget metus a nunc fermentum
                    posuere. Nunc vitae nisi vel neque tempus ultricies ut nec quam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Etiam ac est mauris. Nunc placerat neque quis mi pretium, ac placerat
                    nisl bibendum. Mauris ut dolor nec elit porta tincidunt. Donec maximus sagittis purus vel gravida.
                    Nam imperdiet nunc sed ultrices congue. Nam luctus nunc at tristique aliquam. Vivamus lobortis,
                    ante elementum hendrerit pharetra, elit lacus lobortis odio, eu porta elit leo sed lorem.</p>
                <br />
                <p>Donec faucibus enim sed diam fringilla, vel congue ante aliquam. Vestibulum eu erat augue. Aliquam
                    ultrices malesuada finibus. Aliquam non metus tempus, auctor nulla nec, facilisis augue. Nulla ut
                    augue aliquam, cursus turpis viverra, rutrum nisl. Ut ut ipsum et odio pellentesque vehicula. Orci
                    varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <br />
                <h2 className="title is-2">Terms and Conditions</h2>
                <p>Fusce luctus lorem efficitur augue ullamcorper, ut cursus enim tempor. Suspendisse
                    a ultricies lectus, sed fermentum odio. Duis lorem lacus, mollis in placerat in, tempor in
                    mauris. Praesent porta orci erat, non venenatis dolor rhoncus maximus. Vestibulum tristique
                    iaculis elementum. Sed sagittis lectus condimentum justo tincidunt, consectetur mollis orci
                    venenatis. Mauris vehicula ante in ipsum ullamcorper faucibus. Vivamus eu eleifend ex, in
                    bibendum lacus. Duis iaculis consequat sagittis. In mauris enim, accumsan sed laoreet ut,
                    placerat id ante. Aliquam et semper lacus. Pellentesque scelerisque viverra dui et hendrerit.
                    Vestibulum bibendum eros eu sem cursus lacinia. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.</p>
                <br />
                <p>Pellentesque interdum sem vitae nisi tempus, at egestas eros maximus. Pellentesque
                    vel ante nisl. Proin pulvinar, eros id posuere congue, lacus sapien hendrerit ante, eget mattis
                    magna mi id felis. Sed rutrum elit lorem, ac fermentum ante tincidunt in. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis porttitor magna ut
                    elit semper auctor. Integer ac felis sed sem bibendum ornare non vel odio. Ut neque tortor,
                    bibendum ac aliquet vitae, congue lobortis mauris. Vivamus ut convallis odio. Ut quis lacinia
                    leo. Aliquam commodo accumsan lorem, vitae euismod quam rhoncus eu.</p>
                <QuizFrame>
                    <div className="field">
                        <label className="label">
                            Please select the autoimmune diseases you have been diagnosed with.
                        </label>
                        <div className="control">
                            <div className="select">
                                <select>
                                    <option>Type 1 diabetes</option>
                                    <option>Rheumatoid arthritis (RA)</option>
                                    <option>Psoriasis/psoriatic arthritis</option>
                                    <option>Multiple sclerosis</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="field">
                        <label className="label">
                            At what age did you first seek medical advice for your symptoms?
                        </label>
                        <div className="control">
                            <input className="input" type="number" />
                        </div>
                    </div>
                    <br />

                    <div className="field">
                        <label className="label">
                            Was your diagnosis of an autoimmune disease confirmed by a specialist?
                        </label>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="question" />
                                Yes
                                </label>
                            <label className="radio">
                                <input type="radio" name="question" />
                                No
                            </label>
                        </div>
                    </div>
                    <br />

                    <div className="field">
                        <label className="label">At what age were you first diagnosed by a specialist?</label>
                        <div className="control">
                            <input className="input" type="number" />
                        </div>
                    </div>
                    <br />

                    <div className="field">
                        <label className="label">How many doctors have you seen for your autoimmune disease?</label>
                        <div className="control">
                            <input className="input" type="number" />
                        </div>
                    </div>
                    <br />

                    <div className="field">
                        <label className="label">
                            How many doctors did you see before you were correctly diagnosed?
                        </label>
                        <div className="control">
                            <input className="input" type="number" />
                        </div>
                    </div>
                    <br />

                    <div className="field">
                        <label className="label">
                            Do you have first degree relatives
                            (mother, father, sibling, aunt, uncle, grandparent, grandchild) with an autoimmune disease?
                        </label>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="question" />
                                Yes
                                                </label>
                            <label className="radio">
                                <input type="radio" name="question" />
                                No
                            </label>
                        </div>
                    </div>
                    <br />

                    <div className="field">
                        <label className="label">Do you currently smoke tobacco?</label>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="question" />
                                Yes
                                                </label>
                            <label className="radio">
                                <input type="radio" name="question" />
                                No
                            </label>
                        </div>
                    </div>
                    <br />

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-text">Cancel</button>
                        </div>
                    </div>
                </QuizFrame>
            </div>
        );
    }
}

export default Quiz;
