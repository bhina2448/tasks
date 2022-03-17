import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "💔" | "🎂" | "🇳🇴🇮🇸" | "🧽😡🦑" | "🎄";
const ALPHABET: Record<Holiday, Holiday> = {
    "🧽😡🦑": "🎂",
    "🎂": "🎄",
    "🎄": "🇳🇴🇮🇸",
    "🇳🇴🇮🇸": "💔",
    "💔": "🧽😡🦑"
};
const YEAR: Record<Holiday, Holiday> = {
    "💔": "🧽😡🦑",
    "🧽😡🦑": "🎂",
    "🎂": "🇳🇴🇮🇸",
    "🇳🇴🇮🇸": "🎄",
    "🎄": "💔"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    function changeAlphabetically(): void {
        const newHoliday = ALPHABET[holiday];
        setHoliday(newHoliday);
    }
    function changeByDate(): void {
        const newHoliday = YEAR[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <div>Cycle Holiday</div>
            <div>💔 Valentines Day: February 14</div>
            <div>🧽😡🦑 Annoy Squidward Day: February 15</div>
            <div>🎂 Brielles Birthday: June 1</div>
            <div>🇳🇴🇮🇸 Leif Erikson Day: October 9</div>
            <div>🎄 Christmas: December 25</div>
            <div>
                Holiday:<span>{holiday}</span>
            </div>
            <div>
                <Button onClick={changeAlphabetically}>
                    Advance By Alphabet
                </Button>
                <Button onClick={changeByDate}>Advance by Year</Button>
            </div>
        </div>
    );
}
