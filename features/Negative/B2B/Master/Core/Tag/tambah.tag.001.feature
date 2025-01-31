# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah001
Feature: Negative Menambah Master Tag (tambah.tag.001)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data tanpa memilih Tag Category
    Given Login B2B berhasil (001)
    And Pergi ke menu Master (001)
    And Pergi ke menu Core (001)
    And Pergi ke menu Tag (001)
    When Muncul list tag (001)
    And Klik Create New (001)
    And Mengisi semua data tanpa memilih Tag Category (001)
    Then Klik Save, data tidak berhasil disimpan (001)