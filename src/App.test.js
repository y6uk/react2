import React from 'react';
import SamuraiJSApp from "./App";
import * as ReactDom from "react-dom";
import { create } from "react-test-renderer";
import ProfileStatus from "./components/Profile/ProfileInfo/ProfileStatus";


test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDom.render(<SamuraiJSApp />, div)
  ReactDom.unmountComponentAtNode(div)
});

describe("ProfileStatus component", () => {
  test("status from props should be in the state(testing the wrong way!)", () => {
    const component = create(<ProfileStatus status="preved lol" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("preved lol");
  });
});

//const { getByText } = render(<SamuraiJSApp />);
//const linkElement = getByText();
//expect(linkElement).toBeInTheDocument();