import React = require("react");
import {ReactElement} from "react";
import {Props as HeaderProps} from "./Header"
import {Props as ExternalLinkProps} from "./ExternalLink"
import {Props as ButtonProps} from "./ONSButton"
import {Props as PanelProps} from "./ONSPanel"
import {Props as UploadProps} from "./ONSUpload"


declare module "blaise-design-system-react-components" {
    export function NotProductionWarning(): ReactElement

    export function Footer(): ReactElement

    export function Header(props: HeaderProps): ReactElement<HeaderProps>

    export function BetaBanner(): ReactElement

    export function ExternalLink(props: ExternalLinkProps): ReactElement<ExternalLinkProps>

    export function ONSErrorPanel(): ReactElement

    export function ONSButton(props: ButtonProps): ReactElement<ButtonProps>

    export function ONSPanel(props: PanelProps): ReactElement<PanelProps>

    export function ONSUpload(props: UploadProps): ReactElement<UploadProps>
}