import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { kategoriObatHeader } from "@utils/constant/pageHeader";
import PageTable from "@components/shared/PageTable";
import { useRecoilValue } from "recoil";
import AddFormModal from "@components/shared/AddFormModal";
import { addKategoriObatForm } from "@utils/constant/appForm";
import { useQuery } from "@tanstack/react-query";
import { ENDPOINT } from "@utils/config/Endpoint";
import CustomTableSkeleton from "@components/custom/CustomTableSkeleton";
import { kategoriObatTableSelectorFamily } from "@store/selector/obatSelector";
import { getFunction } from "@utils/helper/fetch";
import { editFromState } from "@store/atom/globalState";

const KategoriObat = () => {
  const editData = useRecoilValue(editFromState);

  const { data, isLoading } = useQuery({ queryKey: ["getClinicDrugCategories"], queryFn: () => getFunction(ENDPOINT.drugCategoryDefault, true) });

  const tableData = useRecoilValue(kategoriObatTableSelectorFamily(data));

  return (
    <Container type="app">
      <PageHeader headerData={kategoriObatHeader} />

      {isLoading || !tableData ? <CustomTableSkeleton /> : <PageTable tableData={tableData} />}

      <AddFormModal formData={editData ? editData : addKategoriObatForm} />
    </Container>
  );
};

export default KategoriObat;
