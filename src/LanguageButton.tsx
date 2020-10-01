import React, { useState } from "react";

import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { Language } from "@material-ui/icons";

const initialState: {
  mouseX: number | null;
  mouseY: number | null;
} = {
  mouseX: null,
  mouseY: null,
};

/**
 * The languages supported by the app to display in the menu
 */
const languages: {
  [key: string]: string;
  English: string;
  日本語: string;
  한국어: string;
} = {
  English: "en",
  日本語: "ja",
  한국어: "ko",
};

/**
 * Holds the current language for the app and also the callback for setting the language
 */
interface Props {
  currentLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Renders the language button
 * @param props Access to the current language and callback for setting the language
 */
function LanguageButton(props: Props) {
  const [state, setState] = useState(initialState);

  /**
   * Sets the state of the button for when the button is pressed
   * @param event Contains the x and y postion of the mouse when pressed
   */
  const openMenu = (event: { clientX: number; clientY: number }) => {
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  /**
   * Sets the language of the application state when the menu is closed
   * @param language The language to set to
   */
  const closeMenu = (language: string) => {
    props.setLanguage(language);
    setState(initialState);
  };

  /**
   * Renders the individual menu items from the languages mapping
   */
  function renderMenuItems() {
    return Object.keys(languages).map((language) => {
      return (
        <MenuItem key={language} onClick={() => closeMenu(languages[language])}>
          {languages[language] === props.currentLanguage ? (
            <b>{language}</b>
          ) : (
            language
          )}
        </MenuItem>
      );
    });
  }

  return (
    <React.Fragment>
      <IconButton onClick={openMenu}>
        <Language />
      </IconButton>
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={() => closeMenu(props.currentLanguage)}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        {renderMenuItems()}
      </Menu>
    </React.Fragment>
  );
}

export default LanguageButton;
