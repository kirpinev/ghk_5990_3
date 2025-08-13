import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import dimond from "./assets/dimond.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { FormEvent, useState } from "react";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";
import { ThxLayout } from "./thx/ThxLayout.tsx";
import { Textarea } from "@alfalab/core-components/textarea";

export const App = () => {
    const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
    const [isMoreClicked, setIsMoreClicked] = useState(false);
    const [value, setValue] = useState("");
    const [isError, setIsError] = useState(false);

    const submit = () => {
        // window.gtag("event", "5990_activate_2");

        LS.setItem(LSKeys.ShowThx, true);
        setThx(true);
    };

    if (thxShow) {
        return <ThxLayout />;
    }

    return (
        <>
            <div className={appSt.container}>
                <div
                    className={appSt.box}
                    style={{
                        backgroundColor: "#F2F3F5",
                        padding: "16px",
                        border: "none",
                    }}
                >
                    <Gap size={8} />
                    <div
                        style={{
                            padding: "4px 16px",
                            width: "fit-content",
                            borderRadius: "16px",
                            margin: "0 auto",
                            backgroundColor: "white",
                        }}
                    >
                        Новое
                    </div>
                    <Gap size={8} />
                    <div>
                        <Typography.TitleResponsive
                            tag="h1"
                            view="medium"
                            font="system"
                            weight="bold"
                        >
                            Ваши цели — больше, чем деньги
                        </Typography.TitleResponsive>
                        <Typography.Text view="primary-medium" color="secondary">
                            Личный ИИ-коуч поможет вам исполнить мечту
                        </Typography.Text>
                    </div>
                    <img src={dimond} alt="Картинка Альфа-Смарт" />
                </div>

                <Gap size={32} />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "16px 0",
                    }}
                >
                    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                        <img src={img1} height={48} width={48} alt="" />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography.Text
                                view="primary-medium"
                                color="primary"
                                weight="bold"
                            >
                                Пошаговый план к мечте
                            </Typography.Text>
                            <Typography.Text view="primary-small" color="secondary">
                                Подскажет, с чего начать и как поэтапно добиться цели
                            </Typography.Text>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "16px 0",
                    }}
                >
                    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                        <img src={img2} height={48} width={48} alt="" />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography.Text
                                view="primary-medium"
                                color="primary"
                                weight="bold"
                            >
                                Вдохновение каждый день
                            </Typography.Text>
                            <Typography.Text view="primary-small" color="secondary">
                                Будет присылать напоминания и поддерживать, чтобы сохранить
                                мотивацию
                            </Typography.Text>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "16px 0",
                    }}
                >
                    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                        <img src={img3} height={48} width={48} alt="" />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography.Text
                                view="primary-medium"
                                color="primary"
                                weight="bold"
                            >
                                Награды за достижения
                            </Typography.Text>
                            <Typography.Text view="primary-small" color="secondary">
                                Помогает следить за прогрессом, повышая ваш уровень и ачивки
                            </Typography.Text>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "16px 0",
                    }}
                >
                    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                        <img src={img4} height={48} width={48} alt="" />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography.Text
                                view="primary-medium"
                                color="primary"
                                weight="bold"
                            >
                                Пространство доверия
                            </Typography.Text>
                            <Typography.Text view="primary-small" color="secondary">
                                Ценит каждое ваше слово и никогда не осудит
                            </Typography.Text>
                        </div>
                    </div>
                </div>
            </div>

            <Gap size={72} />

            <div className={appSt.bottomBtn}>
                <ButtonMobile
                    block
                    view="primary"
                    href=""
                    onClick={() => setIsMoreClicked(true)}
                >
                    Поставить цель
                </ButtonMobile>
            </div>

            <BottomSheet
                open={isMoreClicked}
                onClose={() => setIsMoreClicked(false)}
                actionButton={
                    <ButtonMobile
                        block
                        view="primary"
                        href=""
                        onClick={() => {
                            if (value.length === 0) {
                                setIsError(true);
                            } else {
                                setIsError(false);
                                submit();
                            }
                        }}
                    >
                        Продолжить
                    </ButtonMobile>
                }
            >
                <Gap size={8} />
                <Typography.TitleResponsive
                    tag="h1"
                    view="medium"
                    font="system"
                    weight="bold"
                    style={{ textAlign: "center" }}
                >
                    Расскажите о себе и вашей цели
                </Typography.TitleResponsive>
                <Gap size={16} />

                <Textarea
                    value={value}
                    onInput={(e: FormEvent<HTMLTextAreaElement>) => {
                        const input = e.target as HTMLInputElement;

                        setValue(input.value);
                    }}
                    label="Хочу покорить Эверест через год. Поможешь?"
                    block={true}
                    minRows={10}
                    maxLength={500}
                    showCounter={true}
                />
                <Gap size={8} />
                {isError && (
                    <Typography.Text
                        view="primary-medium"
                        color="negative"
                        style={{ textAlign: "center" }}
                    >
                        Заполните, чтобы получить план для цели
                    </Typography.Text>
                )}
            </BottomSheet>
        </>
    );
};
