import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    // @ts-ignore
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const handeToggleModal = useCallback(() => {
        setIsAuthModal(!isAuthModal);
    }, [setIsAuthModal, isAuthModal]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE_INVERTED}
                className={cls.links}
                onClick={handeToggleModal}
            >
                {t('log_in')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={handeToggleModal}>
                {t('log_in')}
            </Modal>
        </div>
    );
};
