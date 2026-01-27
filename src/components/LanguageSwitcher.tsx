import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { useEffect, useState } from 'react';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    // Sync state with i18n
    useEffect(() => {
        setCurrentLang(i18n.language);
    }, [i18n.language]);

    const handleValueChange = (value: string) => {
        let currentPath = location.pathname;

        // Normalize path to remove existing language prefix
        // Only support 'uk' and 'pl' as prefixes, 'en' is root
        if (currentPath.startsWith('/uk/')) {
            currentPath = currentPath.substring(3);
        } else if (currentPath === '/uk') {
            currentPath = '/';
        } else if (currentPath.startsWith('/pl/')) {
            currentPath = currentPath.substring(3);
        } else if (currentPath === '/pl') {
            currentPath = '/';
        }

        let newPath = currentPath;
        if (value === 'uk') {
            newPath = `/uk${currentPath === '/' ? '' : currentPath}`;
        } else if (value === 'pl') {
            newPath = `/pl${currentPath === '/' ? '' : currentPath}`;
        } else {
            // en -> root
            newPath = currentPath;
        }

        // Ensure it starts with slash and no double slashes if root
        if (newPath === '') newPath = '/';

        navigate(newPath);
        i18n.changeLanguage(value);
    };

    return (
        <Select value={currentLang} onValueChange={handleValueChange}>
            <SelectTrigger className="w-[70px] bg-transparent border-gray-200">
                <SelectValue placeholder="En" />
            </SelectTrigger>
            <SelectContent className="bg-white/80 backdrop-blur-lg border-gray-200">
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
                <SelectItem value="pl">PL</SelectItem>
            </SelectContent>
        </Select>
    );
}
