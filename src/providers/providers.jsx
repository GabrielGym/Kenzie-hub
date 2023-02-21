import { FormsProviders } from "./formsContext";
import { FucoesExtrasProviders } from "./funcoesExtras";
import { FuncoesTechProviders } from "./funcoesTechContext";
import { InfoUserProviders } from "./infosUSerContext";
import { VerificacaoModalProvider } from "./verificaçãoModalContext";

const Providers = ({ children }) => {
    return (
        <FucoesExtrasProviders>
            <VerificacaoModalProvider>
                <InfoUserProviders>
                    <FormsProviders>
                        <FuncoesTechProviders>
                            {children}
                        </FuncoesTechProviders>
                    </FormsProviders>
                </InfoUserProviders>
            </VerificacaoModalProvider>
        </FucoesExtrasProviders>
    )
};

export default Providers;