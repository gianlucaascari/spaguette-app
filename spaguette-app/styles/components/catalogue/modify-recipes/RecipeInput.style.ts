import { SPACING } from "@/styles/const/spacing";
import { TYPOGRAPHY } from "@/styles/const/typography";
import { WIDTHS } from "@/styles/const/widths";
import { StyleSheet, useWindowDimensions } from "react-native";

export const useStyles = () => {
    const { width } = useWindowDimensions();
    const isMobile = width < WIDTHS.mobileBreakdown;

    return StyleSheet.create({
        container: {
            marginVertical: SPACING.medium,
        },
        titleInput: {
            fontSize: TYPOGRAPHY.titleSize,
            fontWeight: TYPOGRAPHY.titleWeight,
            marginVertical: SPACING.small,
        },
        textAreaInput: {
            marginVertical: SPACING.small,
            minHeight: 100,
            outline: 'none',
        },
        textInput: {
            marginVertical: SPACING.small,
        }
    })
}