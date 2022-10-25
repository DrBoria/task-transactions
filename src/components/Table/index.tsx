import { ReactNode } from 'react';

import { Select, TOption } from 'components/Form';
import Pagination from 'components/Pagination';
import { SubTitle } from 'components/Typography';

import { StyledHeaderCell } from './TableCels/styles';
import { PaginationContainer, TableWrapper } from './styles';
import { GridContainer } from 'components/Containers';

export type THeaderCol = {
  text: string;
  align?: string;
  sort?: () => any;
  isSortable?: boolean;
}

type TTableContainerProps = {
  pagination?: {
    current: number;
    totalPages: number;
    changePage: (newPage: number) => void;
  };
  rowsPerPage?: {
    options: TOption[];
    current: number;
    changeElementsPerPage: (elementsPerPage: number) => void;
  };
  headerCols?: THeaderCol[];
  colsTemplate: string;
  children: ReactNode;
};

const TableContainer = ({ children, headerCols, colsTemplate, pagination, rowsPerPage }: TTableContainerProps) => {
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    rowsPerPage?.changeElementsPerPage(Number.parseInt(event.target.value, 10));
  };
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, newPage: number) => {
    pagination?.changePage(newPage);
  };

  return (
    <div>
      <TableWrapper offsetBottom>
        {/* Table Head */}
        <GridContainer colsTemplate={colsTemplate}>
          {headerCols?.map(({ text, sort = () => {}, isSortable, align }) => (
            <StyledHeaderCell key={text} onClick={sort} align={align}>
              <SubTitle>{text}</SubTitle>
              {isSortable && '⟠'}
            </StyledHeaderCell>
          ))}
        </GridContainer>
        {/* Table Content (table cells will be here) */}
        {children}
      </TableWrapper>

      <PaginationContainer>
        {/* Pagination with arrows */}
        {pagination && (
          <Pagination
            pagesCount={pagination.totalPages}
            currentPage={pagination.current}
            onChangePage={handleChangePage}
          />
        )}

        {/* Dropdawn for selction rows per page */}
        {rowsPerPage && (
          <Select
            name='rowsPerPage'
            id='rowsPerPage'
            value={rowsPerPage.current}
            options={rowsPerPage.options}
            onChange={handleChangeRowsPerPage}
          />
        )}
      </PaginationContainer>
    </div>
  );
};

export default TableContainer;
