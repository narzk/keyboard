import React, { useState } from "react";
import "./KeyBoard.css";

const KeyBoard = () => {
  const [text, setText] = useState([]);
  const [capslock, setCapsLock] = useState(false);

  const typeAchar = (input) =>
    capslock
      ? setText([...text, input.toUpperCase()])
      : setText([...text, input]);
  const deleteFunc = () => text.length > 0 && setText(text.slice(0, -1));
  console.log(text.join(""));
  return (
    <div className="container">
      <div className="keyBoard">
        <div className="title"> logitech</div>
        <div className="firstRow">
          <div className="key">esc</div>
          <div className="key1">1</div>
          <div className="key1">2</div>
          <div className="key1">3</div>
          <div className="key" onClick={() => typeAchar("^")}>
            ^
          </div>
          <div className="key" onClick={() => typeAchar("#")}>
            #
          </div>
          <div className="key" onClick={() => typeAchar("@")}>
            @
          </div>
          <div className="key" onClick={() => typeAchar("<")}>
            {"<"}
          </div>
          <div className="key" onClick={() => typeAchar(">")}>
            {">"}
          </div>
          <div className="key" onClick={() => typeAchar("<<")}>
            {"<<"}
          </div>
          <div className="key" onClick={() => typeAchar(">>")}>
            {">>"}
          </div>
          <div className="key" onClick={() => typeAchar("%")}>
            %
          </div>
          <div className="key" onClick={() => typeAchar("$")}>
            $
          </div>
          <div className="key" onClick={() => typeAchar("||")}>
            ||
          </div>
          <div className="key" onClick={() => deleteFunc()}>
            del
          </div>
        </div>
        <div className="firstRow">
          <div className="circleKey" onClick={() => typeAchar("~")}>
            ~
          </div>
          <div className="circleKey" onClick={() => typeAchar("1")}>
            1
          </div>
          <div className="circleKey" onClick={() => typeAchar("2")}>
            2
          </div>
          <div className="circleKey" onClick={() => typeAchar("3")}>
            3
          </div>
          <div className="circleKey" onClick={() => typeAchar("4")}>
            4
          </div>
          <div className="circleKey" onClick={() => typeAchar("5")}>
            5
          </div>
          <div className="circleKey" onClick={() => typeAchar("6")}>
            6
          </div>
          <div className="circleKey" onClick={() => typeAchar("7")}>
            7
          </div>
          <div className="circleKey" onClick={() => typeAchar("8")}>
            8
          </div>
          <div className="circleKey" onClick={() => typeAchar("9")}>
            9
          </div>
          <div className="circleKey" onClick={() => typeAchar("0")}>
            0
          </div>
          <div className="circleKey" onClick={() => typeAchar("-")}>
            -
          </div>
          <div className="circleKey" onClick={() => typeAchar("+")}>
            +
          </div>
          <div className="tab">back</div>
        </div>
        <div className="firstRow">
          <div className="tab">tab</div>
          <div className="circleKey" onClick={() => typeAchar("q")}>
            Q
          </div>
          <div className="circleKey" onClick={() => typeAchar("w")}>
            W
          </div>
          <div className="circleKey" onClick={() => typeAchar("e")}>
            E
          </div>
          <div className="circleKey" onClick={() => typeAchar("r")}>
            R
          </div>
          <div className="circleKey" onClick={() => typeAchar("t")}>
            T
          </div>
          <div className="circleKey" onClick={() => typeAchar("y")}>
            Y
          </div>
          <div className="circleKey" onClick={() => typeAchar("u")}>
            U
          </div>
          <div className="circleKey" onClick={() => typeAchar("i")}>
            I
          </div>
          <div className="circleKey" onClick={() => typeAchar("o")}>
            O
          </div>
          <div className="circleKey" onClick={() => typeAchar("p")}>
            P
          </div>
          <div className="circleKey" onClick={() => typeAchar("{")}>
            {"{"}
          </div>
          <div className="circleKey" onClick={() => typeAchar("}")}>
            {"}"}
          </div>
          <div className="circleKey" onClick={() => typeAchar("/")}>
            /
          </div>
        </div>
        <div className="firstRow">
          <div className="tab" onClick={() => setCapsLock(!capslock)}>
            {capslock && <div className="capsLock"></div>}
            caps
          </div>
          <div className="circleKey" onClick={() => typeAchar("a")}>
            A
          </div>
          <div className="circleKey" onClick={() => typeAchar("s")}>
            S
          </div>
          <div className="circleKey" onClick={() => typeAchar("d")}>
            D
          </div>
          <div className="circleKey" onClick={() => typeAchar("f")}>
            F
          </div>
          <div className="circleKey" onClick={() => typeAchar("g")}>
            G
          </div>
          <div className="circleKey" onClick={() => typeAchar("h")}>
            H
          </div>
          <div className="circleKey" onClick={() => typeAchar("j")}>
            J
          </div>
          <div className="circleKey" onClick={() => typeAchar("k")}>
            K
          </div>
          <div className="circleKey" onClick={() => typeAchar("l")}>
            L
          </div>
          <div className="circleKey" onClick={() => typeAchar(";")}>
            ;
          </div>
          <div className="circleKey" onClick={() => typeAchar("'")}>
            {""}
          </div>
          <div className="enter">Enter</div>
        </div>
        <div className="firstRow">
          <div className="tab">shift</div>
          <div className="circleKey" onClick={() => typeAchar("z")}>
            Z
          </div>
          <div className="circleKey" onClick={() => typeAchar("x")}>
            X
          </div>
          <div className="circleKey" onClick={() => typeAchar("c")}>
            C
          </div>
          <div className="circleKey" onClick={() => typeAchar("v")}>
            V
          </div>
          <div className="circleKey" onClick={() => typeAchar("b")}>
            B
          </div>
          <div className="circleKey" onClick={() => typeAchar("n")}>
            N
          </div>
          <div className="circleKey" onClick={() => typeAchar("m")}>
            M
          </div>
          <div className="circleKey" onClick={() => typeAchar("<")}>
            {"<"}
          </div>
          <div className="circleKey" onClick={() => typeAchar(">")}>
            {">"}
          </div>
          <div className="circleKey" onClick={() => typeAchar(",")}>
            ,
          </div>
          <div className="circleKey" onClick={() => typeAchar(".")}>
            .
          </div>
          <div className="circleKey" onClick={() => typeAchar("?")}>
            ?
          </div>
          <div className="tab">shift</div>
        </div>
        <div className="firstRow">
          <div className="circleKey">ctrl</div>
          <div className="circleKey">fn</div>
          <div className="circleKey">alt</div>
          <div className="circleKey">cmd</div>
          <div className="space" onClick={() => typeAchar(" ")}></div>
          <div className="circleKey">alt</div>
          <div className="circleKey">ctrl</div>
          <div className="arrow">
            <div className="bottomArrow">
              <div className="keyHide"></div>
              <div className="keyArrow"></div>
            </div>
            <div className="bottomArrow">
              <div className="keyArrow"></div>

              <div className="keyArrow"></div>
              <div className="keyArrow"></div>
            </div>
          </div>
        </div>
      </div>
      <input
        className="text"
        value={text.join("")}
        onChange={(e) => setText([...e.target.value])}
        placeholder="type here ..."
      />
    </div>
  );
};
export default KeyBoard;
