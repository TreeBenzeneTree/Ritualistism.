// Symbolic Keyboard Input System - React UI
// Transliteration-based ritual input system for Symbolic OS

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const transliterationMap = {
  A: 'ⴰ', B: 'ⴱ', C: 'ⵛ', D: 'ⴷ', E: 'ⴻ', F: 'ⴼ', G: 'ⴳ',
  H: 'ⵀ', I: 'ⵉ', J: 'ⵊ', K: 'ⴽ', L: 'ⵍ', M: 'ⵎ', N: 'ⵏ',
  O: 'ⵄ', P: 'ⵒ', Q: 'ⵇ', R: 'ⵔ', S: 'ⵙ', T: 'ⵜ', U: 'ⵓ',
  V: 'ⵠ', W: 'ⵡ', X: 'ⵅ', Y: 'ⵢ', Z: 'ⵣ'
};

function transliterate(input) {
  return input.toUpperCase().split('').map(char => {
    return transliterationMap[char] || char;
  }).join('');
}

export default function SymbolicKeyboard() {
  const [inputText, setInputText] = useState("");
  const [tifinaghText, setTifinaghText] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setInputText(val);
    setTifinaghText(transliterate(val));
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-bold">Symbolic Ritual Input</h2>
          <Input
            placeholder="Type in English..."
            value={inputText}
            onChange={handleChange}
          />
          <div className="text-lg mt-2">
            <span className="font-semibold">Tifinagh:</span> {tifinaghText}
          </div>
        </CardContent>
      </Card>
      <Button variant="outline" className="w-full">Send to Ritual Engine</Button>
    </div>
  );
}
