export class ToastInfo {
    isShow: boolean = false;
    message!: string;
    type!: ToastType;
}

export class AllTypeToast {
    public static information: ToastType = {
        text: 'Information',
        color: 'blue',
        image: 'information.svg',
    };
    public static error: ToastType = {
        text: 'Erreur',
        color: 'red',
        image: 'error.svg',
    };
    public static success: ToastType = {
        text: 'Succès',
        color: 'green',
        image: 'success.svg',
    };
}

interface ToastType {
    text: string;
    color: String;
    image: String;
}
