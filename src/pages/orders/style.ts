import styled from "@emotion/styled";

export const OrdersPage = styled.div`
    display: flex;
    flex-direction: column;
`

export const OrdersPageHeader = styled.div`
    padding: 16px;
    display: flex;
    justify-content: space-between;

    input {
        border-color: #E5E9EB;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.084px;

        &::placeholder {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: -0.084px;
        }
    }

    .time {
        padding: 0 12px;
        height: 36px;
        display: flex;
        align-items: center;
        gap: 8px;
        border-radius: 6px;
        border: 1px solid #E5E9EB;
        font-weight: 500;
        font-size: 14px;
    }
`

export const OrdersPageContent = styled.div`
    padding: 16px;
`

export const OrderStage = styled.div<any>`
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 6px;
    overflow: hidden;
    background-color: #EEF0F2;
    //height: calc(100vh - 14%);
    
    .header{
        padding: 12px;
        background-color: ${props => props.bg};
        color: #FFF;
        text-align: justify;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.7px;
        text-transform: uppercase;
    }
`
