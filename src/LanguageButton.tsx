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

interface Props {
  currentLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

function LanguageButton(props: Props) {
  const [state, setState] = useState(initialState);

  const openMenu = (event: { clientX: number; clientY: number }) => {
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const closeMenu = (language: string) => {
    props.setLanguage(language);
    setState(initialState);
  };

  function renderMenuItems() {
    return Object.keys(languages).map((language) => {
      return (
        <MenuItem key={language} onClick={() => closeMenu(languages[language])}>
          {language}
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
