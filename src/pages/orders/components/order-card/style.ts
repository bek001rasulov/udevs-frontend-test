import styled from "@emotion/styled";

export const OrderCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: white;
    border-radius: 6px;
`

export const OrderCardHeader = styled.div`
    padding: 12px;
    border-bottom: 1px solid #E5E9EB;
    display: flex;
    justify-content: space-between;
`

export const OrderCardBody = styled.div<any>`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: ${props => props.variant !== "new" ? '0 12px 12px 12px' : '0 8px'};
`

export const OrderCardFooter = styled.div<any>`
    border-top: 1px solid #E5E9EB;
    padding: ${props => props.variant !== "new" ? '12px 8px 8px 8px' : '12px'};
    display: flex;
    flex-direction: column;
    gap: 8px;

    .ready-btn {
        svg {
            path {
                fill: #0E73F6;
            }
        }
    }
`

export const OrderComments = styled.div<any>`
    padding-bottom: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
