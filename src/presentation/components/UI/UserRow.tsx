import ActionsMenu from "./ActionsMenu";

type Props = {
    rowNumber: number,

    id: string;

    name: string;

    lastName: string;

    isActive: boolean;

    isBlocked: boolean;

    onDetails: () => void;

    onToggleActive: () => void;

    onToggleBlock: () => void;

    onDelete: () => void;
};

export default function UserRow({
    rowNumber,
    id,
    name,
    lastName,
    isActive,
    isBlocked,
    onDetails,
    onToggleActive,
    onToggleBlock,
    onDelete
}: Props) {

    return (
        <tr className="border-b hover:bg-slate-50">
            <td className="px-4 py-3">
                {rowNumber}
            </td>
            <td className="px-4 py-3">
                {name}
            </td>
            <td className="px-4 py-3">
                {lastName}
            </td>            
            <td className="px-4 py-3 text-right">
                <ActionsMenu
                    isActive={isActive}
                    isBlocked={isBlocked}
                    onDetails={onDetails}
                    onToggleActive={onToggleActive}
                    onToggleBlock={onToggleBlock}
                    onDelete={onDelete}
                />
            </td>
        </tr>
    );
}