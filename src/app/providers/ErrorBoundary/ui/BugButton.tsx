import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

// Component for testing
export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const handleToggleError = () => setError(!error);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={handleToggleError}
        >
            {t('throw_error')}
        </Button>
    );
};
